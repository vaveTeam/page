$("#owpTitle").draggable()
.click(function() {
  $(this).draggable({ disabled: false });
}).dblclick(function() {
  $(this).draggable({ disabled: true });
});
​