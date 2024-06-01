document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.button');

    buttons.forEach(function(button) {
        button.addEventListener('touchstart', function() {
            this.click();
        });
    });
});
