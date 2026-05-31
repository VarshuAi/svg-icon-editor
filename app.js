
            const inp = document.getElementById('svg-inp-icon');
            const view = document.getElementById('svg-view');
            inp.addEventListener('input', () => {
                view.innerHTML = inp.value;
            });
            view.innerHTML = inp.value;
        