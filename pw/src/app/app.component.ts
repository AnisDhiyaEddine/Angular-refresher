import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  validChars = "azertyuiopqsdfghjkklmwxcvbn";
  validNumber = "1234567890";
  validSymbols = "#@é'(§è!çà)-_";

  onChangeLength(event: any) {
    const parsedValue = parseInt(event.target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(`
      About to generate a password with the following:
      Includes letters: ${this.includeLetters}
      Includes numbers: ${this.includeNumbers}
      Includes symbols: ${this.includeSymbols}
    `);
    this.password = "";
    let pass = "";
    if (this.includeLetters) pass += this.validChars;
    if (this.includeNumbers) pass += this.validNumber;
    if (this.includeSymbols) pass += this.validSymbols;
    for(let i = 0; i < this.length ; i++){
      this.password += pass[Math.floor(Math.random() * pass.length)];
    }
  }
}
