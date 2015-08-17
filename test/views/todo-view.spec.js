import jQuery from 'jquery';
import $ from 'jquery';
import {_} from 'underscore';
import Backbone from 'backbone';

import TodoCollection from '../../src/js/collections/todos';
import TodoModel from '../../src/js/models/todo';
import TodoView from '../../src/js/views/todo-view';

  describe('TodoView', function(){
    beforeEach(function(){
      this.model = new TodoModel();

      this.view = new TodoView({
        model: this.model
      });

      this.view.render();
    });

    it('should run onToggle() when checkbox is clicked', function() {
      let input = $('.toggle');
      spyOn(input, 'toggle');
      let e = jQuery.Event('click');

      input.toggle(e);

      expect(input.toggle).toHaveBeenCalled();
    });

    // it('should run onDestroy() when destroy button is clicked', function() {
    //   let button = $('.destroy');
    //   spyOn(button, 'destroy');
    //   let e = jQuery.Event('click');
    //
    //   button.destroy(e);
    //
    //   expect(button.destroy).toHaveBeenCalled();
    // });

    it('should run onEdit() when label is double clicked', function() {
      let label = $('label');
      spyOn(label, 'addClass');
      let e = jQuery.Event('dblclick');

      label.addClass(e);

      expect(label.addClass).toHaveBeenCalled();
    });

    it('should run onClose() when you go outside of the edit input', function() {
      let input = $('.edit');
      spyOn(input, 'removeClass');
      let e = jQuery.Event('blur');

      input.removeClass(e);

      expect(input.removeClass).toHaveBeenCalled();
    });

    // it('should run onEscape() when you hit escape while editing', function() {
    //   let input = $('.edit');
    //   spyOn(input, 'onClose');
    //   let e = jQuery.Event( 'keydown', { keyCode: 27 } );
    //
    //   input.onClose(e);
    //
    //   expect(input.onClose).toHaveBeenCalled();
    // })

    // it('should run onEnter() when you hit enter while editing', function() {
    //   let input = $('.edit');
    //   spyOn(input, 'onClose');
    //   let e = jQuery.Event( 'keyup', { keyCode: 13 } );
    //
    //   input.onClose(e);
    //
    //   expect(input.onClose).toHaveBeenCalled();
    // })

  });
