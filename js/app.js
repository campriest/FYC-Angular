var app = angular.module('myDisplay', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider


    .when('/news', {


        templateUrl :"/views/news.html"
    })


});

app.controller("myControl", function($scope){



    $scope.searchClick = function(){
        ""



    }



    $scope.mainStyle = {
        "position":"fixed",
        "top": "0px",
        "left": "0px",
        "width": "100%",
        "height": "20px"
    }

    $scope.headStyle = {

        "position" : "fixed",
        "margin-left" : "45%",
        "margin-top" : "20px",
        "font-size" : "40px",
        "font-family" : "'Fjalla One', sans-serif",
        "letter-spacing": "2px"


    }

    $scope.fyc = "F-Y-C";


    $scope.fontStyle = {
        "position": "absolute",

        "top": "0px",
        "margin-top": "15px",
        "margin-left": "10px",
        "font-size" : "40px",


    }







    $scope.xStyle = {
        "position" : "absolute",
        "margin-top" : "5px",
        "margin-left" : "175px",
        "font-family" : "Varela Round, sans-serif",
        "font-size" : "22px"


    }

    $scope.logStyle = {

        "position" : "absolute",
        "margin-top" : "35px",
        "margin-left" : "6px",
        "font-family" : ""


    }

    $scope.buttonStyle ={

        "position" : "absolute",
        "top": "0px",
        "margin-top" : "25px",
        "margin-left": "90%",
        "width" : "50px",
        "height" : "50px",
        "background-color": "rgb(200,200,200)",
        "border-color": "rgb(0,0,0)",
        "border-width": "1px",
        "border-style": "solid",
        "border-radius": "50%",
        "outline": "none",
        "font-size" : "30px",
        "font-family": "'Cantarell', sans-serif"
    }





    $scope.news = "News";

    $scope.newsStyle = {

        "position" : "absolute",
        "margin-top": "80px",
        "margin-left": "45.6%",
        "font-size" : "25px",
        "font-family" : "'Cantarell', sans-serif"

    }


    $scope.yours = "Yours";

    $scope.yoursStyle = {

        "position" : "absolute",
        "margin-top" : "80px",
        "margin-left" : "35%",
        "font-size" : "25px",
        "font-family" : "'Cantarell', sans-serif"
    }

    $scope.select = "Select";

    $scope.selectStyle ={
        "position" : "absolute",
        "margin-top" : "80px",
        "margin-left" : "55%",
        "font-size" : "25px",
        "font-family" : "'Cantarell', sans-serif"

    }


    $scope.showMenu = false;

    $scope.clickFunction = function(){
        $scope.showMenu = !$scope.showMenu;
        console.log("work");



    }

    $scope.closeMenu = function(){

            $scope.showMenu = !$scope.showMenu;


    }
    $scope.menuStyle = {
        "display": "inline",
        "position" : "absolute",
        "top" : "0px",
        "left": "81%",
        "margin-left" : "40px",

        "width" : "203px",
        "height" : "100%",
        "background-color" : "rgb(220,220,220)",
        "font-family": "'Cantarell', sans-serif"



    }
    $scope.userStyle = {
        "display" : "none"


    }
    $scope.passwordStyle = {
        "display" : "none",

    }

    $scope.logIn = function(){

        $scope.logStyle ={
            "display" : "none"
        }

        $scope.userStyle = {
            "display" : "inline",
            "position" : "absolute",
            "margin-top" : "20px",
            "margin-left" : "5px",


        }


        $scope.passwordStyle = {
            "display": "inline",
            "position" : "absolute",
            "margin-top" : "65px",
            "margin-left" : "5px"

        }



    }
    $scope.menu = function(){



    }

    $scope.newsGo = function(){
            console.log("works");


    }

});
