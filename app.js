var app = angular.module("wordApp", []);

app.controller("wordCtrl", function ($scope, $interval) {

	$scope.sentence = [];

	$scope.parameters = {
		"words": ["Toys", "YouTube", "Fidget Spinner", "McDonalds", "Barbie Dolls","Hatchimals","Popcorn", "Minions", "Yoda", "Chewbacca"],
		"phrases": ["Rick and Morty", "I want that", "I dont want to go to bed", "you don't know me", "it's not a phase"],
		"styles" : ["red", "green", "outlined", "uppercase"]
	}


	$scope.addWords = function () {
		var randWord = $scope.parameters.words[Math.floor(Math.random() * $scope.parameters.words.length)];
		var pendWord = {"word": randWord,"class": ""};

		$scope.sentence.push(pendWord);
	};

	$scope.addFancyWords = function () {
		var randWord = $scope.parameters.words[Math.floor(Math.random() * $scope.parameters.words.length)];
		var randClass= $scope.parameters.styles[Math.floor(Math.random() * $scope.parameters.styles.length)];

		var pendWord = {"word": randWord,"class": randClass};

		$scope.sentence.push(pendWord);
	};

	$scope.addPhrases = function () {
		var randPhrase = $scope.parameters.phrases[Math.floor(Math.random() * $scope.parameters.phrases.length)];
		var pendPhrase = {"word": randPhrase,"class": ""};

		$scope.sentence.push(pendPhrase);
	};

	$scope.addFancyPhrases = function () {
		var randPhrase = $scope.parameters.phrases[Math.floor(Math.random() * $scope.parameters.phrases.length)];
		var randClass= $scope.parameters.styles[Math.floor(Math.random() * $scope.parameters.styles.length)];
		var pendPhrase = {"word": randPhrase,"class": randClass};

		$scope.sentence.push(pendPhrase);
	};

	$interval($scope.addWords, 3000);
});

