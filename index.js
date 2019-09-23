/**
 * The goal is to do something without `notify` in JS prepend response
 */

/**
 * This code is executed before the HTML element is replaced with a new representation.nd add extra classes to index.html
 * see response.xml
 * @param {String} id
 */
function myHideFunction(id) {
  var el = $("#"+id);
  el.attr("id", id+"-anim").fadeOut(500, function(){
    Wicket.Event.publish("/myAnim/hidden/"+id, id);
  });
  $("<span/>").attr("id", id).appendTo(el.parent());
}

/**
 * This code is executed after the HTML element is replaced with a new representation.
 * see response.xml
 * @param {String} id
 */
function myShowFunction(id) {
  Wicket.Event.subscribe("/myAnim/hidden/"+id, mySubscriber);
}

function mySubscriber(evt, id) {
  $("#"+id).fadeIn(500);
  Wicket.Event.unsubscribe("/myAnim/hidden/"+id, mySubscriber);
}

/**
 * Essentially that's approximately what the listener from above pretends to do
 */
Wicket.Event.add(window, "domready", function(event) {
  document.getElementById("doSomething").addEventListener("click", function(){
    Wicket.Ajax.get({u: "/response.xml"});
  });
})
