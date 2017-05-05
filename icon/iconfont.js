;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-back" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M917.333333 453.973333 124.842667 453.973333l280.362667-280.362667L375.082667 143.36l-331.904 331.946667 30.165333 30.165333 0.042667-0.042667 301.738667 301.738667L405.333333 777.045333 124.928 496.64 917.333333 496.64 917.333333 453.973333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M253.647872 911.81056l48.335872 48.336896 446.498816-446.589952L301.983744 67.017728 253.647872 115.3536l398.239744 398.232576L253.647872 911.81056z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-menu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 213.333333l768 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-768 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333zM128 725.333333l768 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-768 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333zM128 469.333333l768 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-768 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M970.38 338.954c0 0-459.558 484.355-459.558 484.355s-64.093-67.486-64.093-67.486c0 0 0 0 0 0 0 0-395.488-416.884-395.488-416.884 0 0 64.093-67.535 64.093-67.535 0 0 395.488 416.884 395.488 416.884 0 0 395.488-416.884 395.488-416.884 0 0 64.093 67.535 64.093 67.535z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-my" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M668.502915 1018.956124 350.307899 1018.956124c-117.66077 0-243.863077-43.342134-243.863077-159.475108L106.444822 692.046632c0-85.434811 99.778494-147.522891 183.421496-188.099029 0.511653 0.538259 1.312902 1.076518 1.88186 1.601474-51.215452-53.271274-82.82845-125.123742-82.82845-204.423833 0-164.082032 134.49518-297.033044 300.484655-297.033044 165.977195 0 300.472376 132.949988 300.472376 297.033044 0 78.878488-31.247678 150.382009-82.025155 203.535603 0.49528-0.480954 1.222851-0.918929 1.660826-1.399883 83.629699 40.152489 182.854585 102.796224 182.854585 188.785667l0 167.434383C912.367015 975.61399 786.032702 1018.956124 668.502915 1018.956124zM764.812401 301.125245c0-139.494031-114.440425-252.433266-255.408017-252.433266-140.979872 0-255.390621 112.939235-255.390621 252.433266 0 139.479705 114.411773 252.433266 255.390621 252.433266C650.371976 553.558511 764.812401 440.605973 764.812401 301.125245zM864.561219 696.216605c0-74.447573-95.027284-126.507252-171.283038-160.496367C642.443399 574.691831 578.781474 598.156242 509.404384 598.156242c-69.040423 0-132.468011-23.258727-183.187159-61.942771-76.314083 34.106796-172.128289 85.935208-172.128289 160.002111l0 155.742087c0 101.003392 114.703415 125.025505 216.872353 125.025505l276.729625 0c102.313224 0 216.871329-24.022113 216.871329-125.025505L864.562243 696.216605z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)