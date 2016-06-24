(function () {
    angular
        .module('app')
        .controller('Week01Controller', Week01Controller);
        
        function Week01Controller($scope) {
            var vm = this;
            
            vm.header = "Week 1: Introduction to Robotics";
            
            vm.parts = [
                {text: "Frame: This is the body of our robot. Other parts will attach to this.", img: "week01/img/frame.jpg"},
                {text: "Arduino Microcontroller: This is the programmable brain of our robot.", img: "week01/img/arduino.jpg"},
                {text: "Battery Holder: Our robot's power source.", img: "week01/img/batteryholder.jpg"},
                {text: "Motors and Wheels: These will allow our robot to move.", img: "week01/img/motorswheels.jpg"},
                {text: "Motor Driver: This will transfer power to our motors.", img: "week01/img/motordriver.jpg"},
                {text: "Breadboard: We can use this to add circuits to our robot.", img: "week01/img/breadboard.jpg"},
                {text: "Caster Wheel: This will provide extra support and mobility for our robot.", img: "week01/img/casterwheel.jpg"},
                {text: "Servo: Servos are cool motors that we can tell exactly how far to turn and then they will hold that position. This differs from our wheel motors which will just turn endlessly when power is applied.", img: "week01/img/servo.jpg"},
                {text: "Miscellaneous Parts: Extra electronics for us to experiment with, including LEDs, resistors, buttons, and more!", img: "week01/img/parts.jpg"},
                {text: "Ultrasonic Sensor: A cool little sensor that can measure distance using sound.", img: "week01/img/ultrasonic.jpg"},
                {text: "Wire: Useful for connecting all our electronics.", img: "week01/img/wire.jpg"},
                {text: "4x20 LCD: A display with 4 rows of 20 characters each.", img: "week01/img/4x20lcd.jpg"},
                {text: "Screwdriver: We'll need this to assemble our robot.", img: "week01/img/screwdriver.jpg"},
            ]
                
            
        }
})();