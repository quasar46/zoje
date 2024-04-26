const showTab = (elTabBtn) => {
	const elTab = elTabBtn.closest('.tab');
	if (elTabBtn.classList.contains('tab-btn-active')) {
		return;
	}
	const targetId = elTabBtn.dataset.targetId;
	const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
	if (elTabPane) {
		const elTabBtnActive = elTab.querySelector('.tab-btn-active');
		elTabBtnActive.classList.remove('tab-btn-active');
		const elTabPaneShow = elTab.querySelector('.tab-pane-show');
		elTabPaneShow.classList.remove('tab-pane-show');
		elTabBtn.classList.add('tab-btn-active');
		elTabPane.classList.add('tab-pane-show');
	}
}

document.addEventListener('click', (e) => {
	if (e.target && !e.target.closest('.tab-btn')) {
		return;
	}
	const elTabBtn = e.target.closest('.tab-btn');
	showTab(elTabBtn);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hvd1RhYiA9IChlbFRhYkJ0bikgPT4ge1xuXHRjb25zdCBlbFRhYiA9IGVsVGFiQnRuLmNsb3Nlc3QoJy50YWInKTtcblx0aWYgKGVsVGFiQnRuLmNsYXNzTGlzdC5jb250YWlucygndGFiLWJ0bi1hY3RpdmUnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCB0YXJnZXRJZCA9IGVsVGFiQnRuLmRhdGFzZXQudGFyZ2V0SWQ7XG5cdGNvbnN0IGVsVGFiUGFuZSA9IGVsVGFiLnF1ZXJ5U2VsZWN0b3IoYC50YWItcGFuZVtkYXRhLWlkPVwiJHt0YXJnZXRJZH1cIl1gKTtcblx0aWYgKGVsVGFiUGFuZSkge1xuXHRcdGNvbnN0IGVsVGFiQnRuQWN0aXZlID0gZWxUYWIucXVlcnlTZWxlY3RvcignLnRhYi1idG4tYWN0aXZlJyk7XG5cdFx0ZWxUYWJCdG5BY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgndGFiLWJ0bi1hY3RpdmUnKTtcblx0XHRjb25zdCBlbFRhYlBhbmVTaG93ID0gZWxUYWIucXVlcnlTZWxlY3RvcignLnRhYi1wYW5lLXNob3cnKTtcblx0XHRlbFRhYlBhbmVTaG93LmNsYXNzTGlzdC5yZW1vdmUoJ3RhYi1wYW5lLXNob3cnKTtcblx0XHRlbFRhYkJ0bi5jbGFzc0xpc3QuYWRkKCd0YWItYnRuLWFjdGl2ZScpO1xuXHRcdGVsVGFiUGFuZS5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZS1zaG93Jyk7XG5cdH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRpZiAoZS50YXJnZXQgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy50YWItYnRuJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgZWxUYWJCdG4gPSBlLnRhcmdldC5jbG9zZXN0KCcudGFiLWJ0bicpO1xuXHRzaG93VGFiKGVsVGFiQnRuKTtcbn0pOyJdLCJmaWxlIjoidGFiLmpzIn0=
