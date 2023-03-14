const fMasuk = document.querySelector('.formMasuk');
const fDaftar = document.querySelector('.formDaftar');
const fMasuk2 = document.querySelector('.formMasuk2');
const fDaftar2 = document.querySelector('.formDaftar2');

function bukaFormMasuk() {
    fMasuk.classList.remove('hidden');
    fDaftar.classList.add('hidden');
}

function bukaFormDaftar() {
    fMasuk.classList.add('hidden');
    fDaftar.classList.remove('hidden');
}

function bukaFormMasuk2() {
    fMasuk2.classList.remove('hidden');
    fDaftar2.classList.add('hidden');
}

function bukaFormDaftar2() {
    fMasuk2.classList.add('hidden');
    fDaftar2.classList.remove('hidden');
}