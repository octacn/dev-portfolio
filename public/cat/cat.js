// ocat.js: https://github.com/adryd325/ocat.js

(function cat() {
  const isReducedMotion =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

  if (isReducedMotion) return;

  const cat = document.createElement("div");

  let catPosX = 32;
  let catPosY = 32;

  let mousePosX = 0;
  let mousePosY = 0;

  let frameCount = 0;
  let idleTime = 0;
  let idleAnimation = null;
  let idleAnimationFrame = 0;
  // Click handling for double/triple click on the cat
  let clickCount = 0;
  let clickTimer = null;
  const CLICK_INTERVAL = 400; // ms to wait for subsequent clicks
  const CLICK_DISTANCE = 48; // px radius to consider click "on the cat"
  // Persistent sleeping state: when true the cat stays sleeping until double-clicked again
  let isSleeping = false;

  const catSpeed = 10;
  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0],
      [-6, 0],
      [-7, 0],
    ],
    scratchWallN: [
      [0, 0],
      [0, -1],
    ],
    scratchWallS: [
      [-7, -1],
      [-6, -2],
    ],
    scratchWallE: [
      [-2, -2],
      [-2, -3],
    ],
    scratchWallW: [
      [-4, 0],
      [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0],
      [-2, -1],
    ],
    N: [
      [-1, -2],
      [-1, -3],
    ],
    NE: [
      [0, -2],
      [0, -3],
    ],
    E: [
      [-3, 0],
      [-3, -1],
    ],
    SE: [
      [-5, -1],
      [-5, -2],
    ],
    S: [
      [-6, -3],
      [-7, -2],
    ],
    SW: [
      [-5, -3],
      [-6, -1],
    ],
    W: [
      [-4, -2],
      [-4, -3],
    ],
    NW: [
      [-1, 0],
      [-1, -1],
    ],
  };

  function init() {
    cat.id = "cat";
    cat.ariaHidden = true;
    cat.style.width = "32px";
    cat.style.height = "32px";
    cat.style.position = "fixed";
    cat.style.pointerEvents = "none";
    cat.style.imageRendering = "pixelated";
    cat.style.left = `${catPosX - 16}px`;
    cat.style.top = `${catPosY - 16}px`;
    cat.style.zIndex = 2147483647;

    let catFile = "./cat.gif"
    const curScript = document.currentScript
    if (curScript && curScript.dataset.cat) {
      catFile = curScript.dataset.cat
    }
    cat.style.backgroundImage = `url(${catFile})`;

    document.body.appendChild(cat);

    document.addEventListener("mousemove", function (event) {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    });

    document.addEventListener("click", handleCatClick);

    window.requestAnimationFrame(onAnimationFrame);
  }

  let lastFrameTimestamp;

  function onAnimationFrame(timestamp) {
    if (!cat.isConnected) {
      return;
    }
    if (!lastFrameTimestamp) {
      lastFrameTimestamp = timestamp;
    }
    if (timestamp - lastFrameTimestamp > 100) {
      lastFrameTimestamp = timestamp
      frame()
    }
    window.requestAnimationFrame(onAnimationFrame);
  }

  function setSprite(name, frame) {
    const sprite = spriteSets[name][frame % spriteSets[name].length];
    cat.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  function nearestWall() {
    const left = catPosX;
    const right = window.innerWidth - catPosX;
    const top = catPosY;
    const bottom = window.innerHeight - catPosY;
    const min = Math.min(left, right, top, bottom);
    if (min === left) return "scratchWallW";
    if (min === right) return "scratchWallE";
    if (min === top) return "scratchWallN";
    return "scratchWallS";
  }

  function handleCatClick(event) {
    const dx = event.clientX - catPosX;
    const dy = event.clientY - catPosY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > CLICK_DISTANCE) return;

    clickCount += 1;
    if (clickTimer) {
      clearTimeout(clickTimer);
    }

    clickTimer = setTimeout(() => {
      if (clickCount >= 3) {

        isSleeping = false;
        idleAnimation = nearestWall();
        idleAnimationFrame = 0;
        idleTime = 0;
      } else if (clickCount === 2) {

        if (isSleeping) {

          isSleeping = false;
          resetIdleAnimation();
        } else {

          isSleeping = true;
          idleAnimationFrame = 0;
          idleTime = 0;

          setSprite("sleeping", 0);
        }
      }
      clickCount = 0;
      clickTimer = null;
    }, CLICK_INTERVAL);
  }

  function resetIdleAnimation() {
    idleAnimation = null;
    idleAnimationFrame = 0;
  }

  function idle() {
    idleTime += 1;

    if (
      idleTime > 10 &&
      Math.floor(Math.random() * 200) == 0
    ) {
      let availableAnimations = ["sleeping", "scratchSelf"];
      if (catPosX < 32) {
        availableAnimations.push("scratchWallW");
      }
      if (catPosY < 32) {
        availableAnimations.push("scratchWallN");
      }
      if (catPosX > window.innerWidth - 32) {
        availableAnimations.push("scratchWallE");
      }
      if (catPosY > window.innerHeight - 32) {
        availableAnimations.push("scratchWallS");
      }
      idleAnimation =
        availableAnimations[
        Math.floor(Math.random() * availableAnimations.length)
        ];
    }

    switch (idleAnimation) {
      case "sleeping":
        if (idleAnimationFrame < 8) {
          setSprite("tired", 0);
          break;
        }
        setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
        if (idleAnimationFrame > 192) {
          resetIdleAnimation();
        }
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 9) {
          resetIdleAnimation();
        }
        break;
      default:
        setSprite("idle", 0);
        return;
    }
    idleAnimationFrame += 1;
  }

  function frame() {
    frameCount += 1;
    const diffX = catPosX - mousePosX;
    const diffY = catPosY - mousePosY;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (isSleeping) {
      if (idleAnimationFrame < 8) {
        setSprite("tired", 0);
      } else {
        setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
      }
      idleAnimationFrame += 1;
      // keep the cat in place
      cat.style.left = `${catPosX - 16}px`;
      cat.style.top = `${catPosY - 16}px`;
      return;
    }

    if (distance < catSpeed || distance < 48) {
      idle();
      return;
    }

    idleAnimation = null;
    idleAnimationFrame = 0;

    if (idleTime > 1) {
      setSprite("alert", 0);
      idleTime = Math.min(idleTime, 7);
      idleTime -= 1;
      return;
    }

    let direction;
    direction = diffY / distance > 0.5 ? "N" : "";
    direction += diffY / distance < -0.5 ? "S" : "";
    direction += diffX / distance > 0.5 ? "W" : "";
    direction += diffX / distance < -0.5 ? "E" : "";
    setSprite(direction, frameCount);

    catPosX -= (diffX / distance) * catSpeed;
    catPosY -= (diffY / distance) * catSpeed;

    catPosX = Math.min(Math.max(16, catPosX), window.innerWidth - 16);
    catPosY = Math.min(Math.max(16, catPosY), window.innerHeight - 16);
    cat.style.left = `${catPosX - 16}px`;
    cat.style.top = `${catPosY - 16}px`;
  }

  init();
})();