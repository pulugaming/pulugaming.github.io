import { createElement, renderElement } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.3/element.js';

        function init() {
            // Elemen target
            const target = document.getElementById('app');

            // Membuat elemen menggunakan createElement
            const myElement = createElement('div', {
                id: 'custom-div',
                className: 'box',
                innerHTML: `
                    <h1>Welcome to jscroot 0.0.3</h1>
                    <p>This content is dynamically created using the createElement and renderElement functions.</p>
                    <button id="click-me">Click Me</button>
                `
            });

            // Merender elemen ke dalam DOM
            renderElement(target, myElement);

            // Tambahkan event listener pada tombol
            const button = document.getElementById('click-me');
            button.addEventListener('click', () => {
                alert('Button Clicked!');
            });
        }

        // Panggil fungsi init saat halaman selesai dimuat
        window.addEventListener('DOMContentLoaded', init);