class Roadmap {
  constructor(listaMaterias) {
    this.listaMaterias = listaMaterias;
  }

  createRoadmap(semestres) {
    this.listaMaterias.sort((a, b) => a.id - b.id);
    const roadmap = [];
    while (this.listaMaterias.length > 0) {
      const materiasSemestre = Math.floor(
        this.listaMaterias.length / semestres
      );

      for (let i = 0; i < materiasSemestre; i++) {
        roadmap.push(this.listaMaterias[i].clave);
        i === materiasSemestre - 1 ? roadmap.push("|") : null;
      }

      this.listaMaterias.splice(0, materiasSemestre);

      semestres--;
    }

    roadmap.pop();
    return roadmap.join("");
  }

  toSeparateRoadmap(roadmap) {
    roadmap = roadmap.split("|"); // Separa la cadena en semestres
    let resultado = [];
    const semestres = [];

    for (const materias of roadmap) {
      for (let i = 0; i < materias.length; i += 4) {
        const materiaNombre = this.listaMaterias.find(
          (m) => m.clave === materias.slice(i, i + 4)
        );
        resultado.push({
          id: materiaNombre.id,
          clave: materiaNombre.clave,
          nombre: materiaNombre.namem,
          creditos: materiaNombre.numcredits,
          codigo: materiaNombre.codigo,
        });
      }
      semestres.push(resultado);
      resultado = [];
    }

    return semestres;
  }
}

module.exports = Roadmap;
