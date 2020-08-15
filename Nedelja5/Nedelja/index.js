class Covek {
    constructor(ime, prezime, godinaRodjenja){
        this.ime = ime
        this.prezime = prezime
        this.godinaRodjenja = godinaRodjenja
    }
}
class Student extends Covek {
    constructor(ime, prezime, godinaRodjenja, godinaStudija, prosek) {
        super(ime, prezime, godinaRodjenja)
        this.godinaRodjenja = godinaRodjenja
        this.godinaStudija = godinaStudija
        this.prosek = prosek
    }
}
class StudentOsnovnihStudija extends Student {
    constructor(ime, prezime, godinaRodjenja, smer){
        super(ime, prezime, godinaRodjenja)
        this.smer = smer
    }
}
class StudentMasterStudija extends Student {
    constructor(ime, prezime, godinaRodjenja, smer) {
        super(ime, prezime, godinaRodjenja)
        this.smer = smer
    }
}
class Zaposleni extends Covek {
    constructor(ime, prezime, godinaRodjenja, godZaposlenja, plata) {
    super(ime, prezime, godinaRodjenja)
    this.godZaposlenja = godZaposlenja
    this.plata = plata
    }
}
class Nastavnik extends Zaposleni {
    constructor(ime, prezime, godinaRodjenja, godZaposlenja, plata, omiljeniPred, listaPred) {
    super(ime, prezime, godinaRodjenja, godZaposlenja, plata)
    this.omiljeniPred = omiljeniPred
    this.listaPred = listaPred
    }
}
class Profesor extends Nastavnik {
    constructor(ime, prezime, godinaRodjenja, godZaposlenja, plata, omiljeniPred, listaPred, titula) {
        super(ime, prezime, godinaRodjenja, godZaposlenja, plata, omiljeniPred, listaPred)
        this.titula = titula
    }
}
class Asistent extends Nastavnik {
    constructor(ime, prezime, godinaRodjenja, godZaposlenja, plata, omiljeniPred, listaPred, smer) {
        super(ime, prezime, godinaRodjenja, godZaposlenja, plata, omiljeniPred, listaPred)
        this.smer = smer
    }
}
class Sluzbenik extends Zaposleni {
    constructor(ime, prezime, godinaRodjenja, godZaposlenja, plata, odsek) {
        super(ime, prezime, godinaRodjenja, godZaposlenja, plata)
        this.odsek = odsek
    }
}

let nastavnik = new Nastavnik('Mica', 'Nenadovic', 1995, 2020, 96000, 'JS',['programiranje', 'matematika2'])
console.log(nastavnik);

let asistent = new Asistent('Nikola', 'Nikolic', 1981, 2016, 230000, 'Docker', ['programiranje1', 'programiranje2'], 'Full Stack Development')
console.log(asistent);

let profesor = new Profesor ('Bolt', 'Maltese', 1985, 2015, 250000, 'Kubernetes', ['OOP', 'JS'], 'Redovni')
console.log(profesor);

let sluzbenik = new Sluzbenik('Pera', 'Peric', 1957, 1995, 80000, 'Studentska sluzba')
console.log(sluzbenik);