angular.module('playListModule')
.controller("playListController", function($scope){
    $scope.playList = [
      {nome:"CyberPunk Eletronic", id:"https://previews.customer.envatousercontent.com/files/304393014/preview.mp3", compositor:"Action Eletronic Rock", duration:"2:16 min"},
      {nome:"ArcadeTrap ", id:"https://previews.customer.envatousercontent.com/files/244559989/preview.mp3", compositor:"Audio Jungle", duration:"1:37 min"},
      {nome:"Summer Chill Beat", id:"https://previews.customer.envatousercontent.com/files/303003777/preview.mp3", compositor:"AMB Crew", duration:"3:25 min"},
      {nome:"Grand Trap Auto", id:"https://previews.customer.envatousercontent.com/files/132855243/preview.mp3", compositor:"Steeves mix", duration:"4:10 min"},
      {nome:"SportAction Rock Electro", id:"https://previews.customer.envatousercontent.com/files/304426856/preview.mp3", compositor:"Tech Logo I.", duration:"5:49 min"},
      {nome:"Trap SL", id:"https://previews.customer.envatousercontent.com/files/224590107/preview.mp3", compositor:" Extreme Rock", duration:"4:45 min"},
      {nome:"5 Version", id:"https://previews.customer.envatousercontent.com/files/303664662/preview.mp3", compositor:"Action Eletronic Rock", duration:"2:37 min"}       
    ]
  
  })