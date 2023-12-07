
const oopen = document.querySelector('.motorcycles')
const containerModels = document.querySelector('.container-models')

oopen.onmouseover = function (e) {
  containerModels.classList.add('visible');
  };
  containerModels.onmouseover = function (e) {
    containerModels.classList.add('visible');
  };
  oopen.onmouseout = function (e) {
    containerModels.classList.remove('visible');
  };
  containerModels.onmouseout = function (e) {
    containerModels.classList.remove('visible');
  };