(function() {
  console.log('hello');
  const right = document.getElementById('window-right-dot');
  const left = document.getElementById('window-left-dot');
  const top = document.getElementById('window-top-dot');
  const bottom = document.getElementById('window-bottom-dot');
  const windowPerspective = document.getElementById('window-perspective');

  setTimeout(() => {
    windowPerspective.classList.add('window-fadein');
    setTimeout(() => {
      right.classList.add('window-height');
      left.classList.add('window-height');
      top.classList.add('window-width');
      bottom.classList.add('window-width');
      getNewTagline();
    }, 1000);

    const navs = ['nav-three', 'nav-two', 'nav-one'];

    navs.map((id, i) => {
      const elem = document.getElementById(id);
      setTimeout(() => {
        elem.classList.add('window-fadein');
      }, (i + 1) * 100 * 3);
    });
  }, 500);

  const tagline = document.getElementById('tagline');

  var taglines = [
    'web',
    'iOS',
    'macOS',
    'Java',
    'React',
    'Windows',
    'C'
  ];
  var taglineCount = 0;

  function getNewTagline() {
    tagline.style = 'opacity:0';

    taglineCount++;

    if (taglineCount >= taglines.length) {
      taglineCount = 0;
    }

    setTimeout(() => {
      tagline.innerText = taglines[taglineCount];
      setTimeout(() => {
        tagline.style = 'opacity:1';
        setTimeout(getNewTagline, 3000);
      }, 200);
    }, 1100);
  }

  var container = document.getElementById('window-perspective'),
    inner = document.getElementById('window');

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //-----------------------------------------

  var counter = 0;
  var updateRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
  };

  //-----------------------------------------

  var onMouseEnterHandler = function(event) {
    update(event);
  };

  var onMouseLeaveHandler = function() {
    inner.style = '';
  };

  var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //-----------------------------------------

  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function(x, y) {
    var style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //-----------------------------------------

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
})();
