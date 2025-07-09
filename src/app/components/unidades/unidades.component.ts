import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css'],
})
export class UnidadesComponent implements OnInit {
  uniSection: string = 'contenidos';
  unidades: any[] = [];
  id: number = 1;
  unidad: any;
  flagCuadro: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private infoService: InfoService
  ) {}

  ngOnInit(): void {
    this.infoService.writeJSON(['test']);

    
    this.infoService.getUnidades().subscribe((unidades) => {
      this.unidades = unidades;

      this.route.paramMap.subscribe((params) => {
        const idParam = params.get('id');
        const parsedId = Number(idParam);

        if (!isNaN(parsedId) && parsedId >= 1 && parsedId <= this.unidades.length) {
          this.id = parsedId;
        } else {
          this.id = 2;
        }

        this.updateUnidad();
      });
    });
  }

  updateUnidad(): void {
    this.unidad = this.unidades[this.id - 1];

    if (!this.unidad.cuadroEval || this.unidad.cuadroEval.trim() === '') {
      this.flagCuadro = false;
    } else {
      this.flagCuadro = true;
    }

    this.updateResources();
    this.updateContents();
  }

  updateResources(): void {
    this.unidad.recurso.forEach((element: any) => {
      if (!element.recurso || element.recurso.trim() === '') {
        element.recurso = "<h3 class='text-center'>Sin recursos disponibles</h3>";
      }
    });
  }

  updateContents(): void {
    this.unidad.contenido.forEach((element: any) => {
      if (!element.unidad || element.unidad.trim() === '') {
        element.unidad = "<h3 class='text-center mt-4'>Sección sin información</h3>";
      }
    });
  }
}
