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
  $("#"+id).fadeOut(2500, function(){
    notify();
  });
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
