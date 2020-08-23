import { Component, OnInit } from '@angular/core';

declare var jQuery: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    (function ($) {
      console.log('Se esta leyendo fragmento script');

      $(document).ready( function () {
        $('.mdb-select').materialSelect();
        $('.select-wrapper.md-form.md-outline input.select-dropdown').bind('focus blur', function() {
          $(this).closest('.select-outline').find('label').toggleClass('active');
          $(this).closest('.select-outline').find('.caret').toggleClass('active');
        });
      });
    })(jQuery);
  }


}
