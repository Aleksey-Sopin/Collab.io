"use strict"
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active'); // добавляет класс при нажатии
		$('body').toggleClass('lock'); //убирает прокрутку у элемента
	});
	$('.header__menu').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active'); // добавляет класс при нажатии
		$('body').toggleClass('lock'); //убирает прокрутку у элемента
	});
});
$('.single-item').slick();

// ===============
// Hover pictures in main page
let mainPicturesContainerBigPhoto = document.querySelector('#big-photo');
let mainPictureContainerUserManager = document.querySelector('#manage-user');
let mainPictureContainerAvater_1 = document.querySelector('#avatar-1');
let mainPictureContainerAvatar_2 = document.querySelector('#avatar-2');

ZoomImage(mainPicturesContainerBigPhoto);
ZoomImage(mainPictureContainerUserManager);
ZoomImage(mainPictureContainerAvater_1);
ZoomImage(mainPictureContainerAvatar_2);
// =================
// results
let resultsIconsList = Array.from(document.getElementsByClassName("icons-list__item"));
ZoomImageArray(resultsIconsList);
// 
// =======================
// page-tools
let toolsIconList = Array.from(document.getElementsByClassName("tools-logo-img-active"));
ZoomImageArray(toolsIconList);
// ==================
// page-11-read
let readImgList = Array.from(document.getElementsByClassName('page-11__img-active'));
ZoomImageArray(readImgList); // зумим лист карнтинок дефолтных
// 
let readImgActiveList = Array.from(document.getElementsByClassName('read-img-active'));
ZoomImageArray(readImgActiveList); // зумим лист картинок новых
// 
let readImgActive_1 = document.querySelector('page-11__img-active-1');
let readImgActive_2 = document.querySelector('page-11__img-active-2');
let readImgActive_3 = document.querySelector('page-11__img-active-3');

ChangeImgToImg(readImgList);

function ChangeImgToImg(readImgList) {
	for (let i = 0; i < readImgList.length; i++) {
		readImgList[i].addEventListener('mouseover', function (event) {
			setTimeout(() => {
				readImgList[i].classList.add('display-none');
				readImgList[i].classList.remove('display-block');
				readImgActiveList[i].classList.add('display-block');
			}, 300)
		});
	}
	for (let i = 0; i < readImgActiveList.length; i++) {
		readImgActiveList[i].addEventListener('mouseout', function (event) {
			setTimeout(() => {
				readImgActiveList[i].classList.remove('display-block');
				readImgList[i].classList.add('display-block');
			}, 300)
		});
	}

}
// functions
function ZoomImage(elementImage) {  // увеличивает картинки при наведении, добавляет класс
	elementImage.addEventListener('mouseover', function (event) {
		elementImage.classList.add('big-photo-img');
		elementImage.style.scale = 1.1;
	});

	elementImage.addEventListener('mouseout', function (event) {
		elementImage.classList.remove('big-photo-img');
		elementImage.style.scale = 1;
	});
}

function ZoomImageArray(itemList) {   // увеличивает элементы массива картинок
	for (let i = 0; i < itemList.length; i++) {
		ZoomImage(itemList[i]);
	}
}