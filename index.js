/**
 * The goal is to do something without `notify` in JS prepend response
 */

/**
 * This code is executed before the HTML element is replaced with a new representation.nd add extra classes to index.html
 *see response1.xml and response2.xml
 * @param {String} id
 */
function myHideFunction(id) {
  var notify = Wicket.Ajax.Call.suspend();
  $("#"+id).fadeOut(3500, function(){
    console.log("fade out done");
    notify();
  });
  otherSuspendingFunction();
}

function otherSuspendingFunction() {
  var notify = Wicket.Ajax.Call.suspend();
  setTimeout(function () {
    console.log("otherSuspendingFunction done");
    notify(); // attempts to notify before the fadeOut finished
  }, 1000);
}

/**
 * This code is executed after the HTML element is replaced with a new representation.
 * see response1.xml and response2.xml
 * @param {String} id
 */
function myShowFunction(id) {
  $("#"+id).fadeIn(500);
}

/**
 * Essentially that's approximately what the listener from above pretends to do
 */
Wicket.Event.add(window, "domready", function(event) {
  document.getElementById("doSomething1").addEventListener("click", function(){
    Wicket.Ajax.get({u: "/response1.xml"});
  });
    document.getElementById("doSomething2").addEventListener("click", function(){
        Wicket.Ajax.get({u: "/response2.xml"});
    });
});
