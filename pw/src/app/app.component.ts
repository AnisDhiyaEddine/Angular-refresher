import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	password: any = '';
	length = 0;
	useLetters = false;
	useNumbers = false;
	useSymbols = false;

	onLengthChange(event: any) {
		if (!isNaN(parseInt(event.target.value))) {
			this.length = parseInt(event.target.value);
		}
	}
	onUseLetterChange() {
		this.useLetters = !this.useLetters;
	}
	onUseNumbersChange() {
		this.useNumbers = !this.useNumbers;
	}
	onUseSymbolsChange() {
		this.useSymbols = !this.useSymbols;
	}

	onButtonClick() {
		let valid: string | Array<string> = '';
		let letters = 'azertyuiopmlkjhgfdsqwxcvbn';
		let numbers = '1234567890';
		let chars = "&²é'(-è_çà_çà)=@#{[|``  ^@]}";
		valid = this.useLetters ? valid + letters : valid;
		valid = this.useNumbers ? valid + numbers : valid;
		valid = this.useSymbols ? valid + chars : valid;

		valid = valid.split('');
		this.password = '';
		for (let i = 0; i < this.length; i++) {
			this.password +=
				valid[
					Math.floor(Math.random() * valid.length)
				];
		}
	}
}
