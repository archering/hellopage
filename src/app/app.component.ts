import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '这是一个测试项目， 用来模仿vuepress';
  desc = " master分支是一个源文件分支，打包之后，copy到或者合并到 page分支，用来发布";

}
