import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.css'
})
export class FileInputComponent implements AfterContentInit {

  public previewSrc!:string;
  public file!:File;

  @ContentChild("fileItem") fieInputElement!: ElementRef<HTMLInputElement>; // this is use take the html element reference which we want ti take


  ngAfterContentInit(): void {
   const {nativeElement} = this.fieInputElement; 

   nativeElement.style.display = "none";

   nativeElement.addEventListener("change", (event) =>{
    this.previewImage(event.target as HTMLInputElement)
   })
  }

  private previewImage(inputRef:HTMLInputElement){
    const file = inputRef.files?.item(0);
    const reader = new FileReader();

    this.file = file as File;

    reader.addEventListener("load", (evt) =>{
      this.previewSrc = evt.target?.result as string;
    });

    reader.readAsDataURL(file as Blob);
  }

  openFileDialog():void{
    this.fieInputElement.nativeElement.click();
  }

}
