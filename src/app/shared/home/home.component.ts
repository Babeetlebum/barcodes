import { Component } from "@angular/core";

import { FormControl, FormGroup, Validators } from "@angular/forms";

import * as JsBarcode from "jsbarcode";

import JSZip from "jszip";

import { saveAs } from "file-saver";

@Component({
  selector: "app-home",
  styleUrls: ["./home.component.sass"],
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  public barcodesForm = new FormGroup({
    barcodes: new FormControl("", [Validators.required])
  });

  public onSubmit() {
    const values: string[] = this.barcodesForm.value.barcodes.split("\n");

    if (values == null || !values.length) {
      console.warn("no barcodes", this.barcodesForm.value);
    }

    const zip = new JSZip();
    const barcodesFolder = zip.folder("barcodes");

    values.forEach(value => {
      JsBarcode("#result", value);

      const base64 = document.getElementById("result").getAttribute("src");
      const commaIndex = base64.indexOf(",");
      barcodesFolder.file(`${value}.png`, base64.slice(commaIndex + 1), {
        base64: true
      });
    });

    zip.generateAsync({ type: "blob" }).then(content => {
      // see FileSaver.js
      saveAs(content, "barcodes.zip");
      // window.location.href = "data:application/zip;base64," + content;
    });
  }
}
