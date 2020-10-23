import { Component, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}

export interface PeriodicElement {
  code: number;
  software: string;
  versaoCliente: string;
  versaoAtual: string;
  ultimaAtualizacao: Date;
  diretorio: string;
  status: boolean;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { code: 1, software: "Retaguarda", versaoCliente: "1.1.57.1", versaoAtual: "1.1.58.1", ultimaAtualizacao: new Date("10/23/20"), diretorio: "D:\COMERCIO.EXE", status: false},
  { code: 2, software: "GIPIEmissorNFCe", versaoCliente: "1.1.57.1", versaoAtual: "1.1.58.1", ultimaAtualizacao: new Date("10/23/20"), diretorio: "D:\COMERCIO.EXE", status: true },
  { code: 3, software: "GIPINF", versaoCliente: "1.1.57.1", versaoAtual: "1.1.58.1", ultimaAtualizacao: new Date("10/23/20"), diretorio: "D:\COMERCIO.EXE", status: false },
  { code: 4, software: "GIPINFe", versaoCliente: "1.1.57.1", versaoAtual: "1.1.58.1", ultimaAtualizacao: new Date("10/23/20"), diretorio: "D:\COMERCIO.EXE", status: false },
  { code: 5, software: "GIPIMonitor", versaoCliente: "1.1.57.1", versaoAtual: "1.1.58.1", ultimaAtualizacao: new Date("10/23/20"), diretorio: "D:\COMERCIO.EXE", status: false },
  { code: 6, software: "GIPIForcaDeVenda", versaoCliente: "1.1.57.1", versaoAtual: "1.1.58.1", ultimaAtualizacao: new Date("10/23/20"), diretorio: "D:\COMERCIO.EXE", status: false },
  { code: 7, software: "PSuporte", versaoCliente: "1.1.57.1", versaoAtual: "1.1.58.1", ultimaAtualizacao: new Date("10/23/20"), diretorio: "D:\COMERCIO.EXE", status: false },
  { code: 8, software: "GIPIServicoApoio", versaoCliente: "1.1.57.1", versaoAtual: "1.1.58.1", ultimaAtualizacao: new Date("10/23/20"), diretorio: "D:\COMERCIO.EXE", status: true },
  { code: 9, software: "GProtecao", versaoCliente: "1.1.57.1", versaoAtual: "1.1.58.1", ultimaAtualizacao: new Date("10/23/20"), diretorio: "D:\COMERCIO.EXE", status: false },
  { code: 10, software: "GeradorSPED", versaoCliente: "1.1.57.1", versaoAtual: "1.1.58.1", ultimaAtualizacao: new Date("10/23/20"), diretorio: "D:\COMERCIO.EXE", status: false }
];

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "dialog-overview-example-dialog.html",
  styleUrls: ["dialog-overview-example-dialog.css"]
})
export class DialogOverviewExampleDialog {
  displayedColumns: string[] = ["code", "software", "versaoCliente", "versaoAtual", "ultimaAtualizacao", "diretorio", "status"];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
