import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TypingLoaderComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent} from '@components/index';
import { TextMessageEvent } from '../../components/text-boxes/textMessageBoxFile/textMessageBoxFile.component';
import {TextMessageBoxEvent} from '../../components/text-boxes/textMessageBoxSelect/textMessageBoxSelect.component';
import { Message } from '@interfaces/message.interface';


@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,ChatMessageComponent,MyMessageComponent,TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {


  public messages =signal<Message[]>([{text:'Hola mundo',isGpt:true}]);
  public isLoading =signal(false);


  handleMessage(prompt: string){
    console.log(prompt);
  }

  handleMessageWithFile({ prompt , file}: TextMessageEvent) {
    console.log({prompt,file});
  }

  handleMessageWithSelect(event:TextMessageBoxEvent)
  {
    console.log(event);

  }


}
