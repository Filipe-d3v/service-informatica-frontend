import { Router } from '@angular/router';
import { OsService } from './../../../../services/os.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Os } from './../../../../models/os';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements AfterViewInit{

  os: Os[] = [];

  displayedColumns: string[] = ['id', 'dataIni', 'nome_cliente', 'fone_cliente', 'endereco_cliente', 'prioridade', 'status', 'observacoes', 'valor', 'acoes'];
  dataSource = new MatTableDataSource<Os>(this.os);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : OsService,
    private router : Router
    ) { }

  ngAfterViewInit(): void {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) => {
      this.os = resposta;
      this.dataSource = new MatTableDataSource<Os>(this.os);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate(): void{
    this.router.navigate(['os/create'])
  }
}
