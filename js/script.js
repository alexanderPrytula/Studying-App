$(document).ready(function() {
	$(window).load(function() {
		
		
		var elemArr = Object.keys(elem),
			interArr = Object.keys(inter),
			set1Arr = Object.keys(set1),
			set2Arr = Object.keys(set2),
			set3Arr = Object.keys(set3),
			selectMode = $('#selectMode'),
			input = $('#enterWord').val(),
			chosenMode = 'Elementary';
	  
	// Boostrap Tooltips

		$('.tooltipButton').tooltip();
		
		window.addEventListener('resize', function() {
			console.log( document.documentElement.clientWidth );
			
			if( document.documentElement.clientWidth <= '768' ) {
				$('.custom-controllers').tooltip();
			} else {
				$('.custom-controllers').tooltip('destroy');
			}
		});
	 
	// GET MODE

		$(selectMode).click(function(ev) {
			chosenMode = ev.target.innerHTML;
		});

		$('input[type="text"]').focus(function() {
			$(this).val('');
		});
	  
	// START

		$('#start').click(function() {
	  
			switch(chosenMode) {
				case 'Elementary':
					rand = Math.ceil(Math.random()*50);
					arrRand = elemArr[rand];
					$('#wordAppearance').text(arrRand);
					break;
				case 'Intermediate':
					rand = Math.ceil(Math.random()*50);
					arrRand = interArr[rand];
					$('#wordAppearance').text(arrRand);
					break;
				case 'Set 1':
					rand = Math.ceil(Math.random()*100);
					arrRand = set1Arr[rand];
					$('#wordAppearance').text(arrRand);
					break;
				case 'Set 2':
					rand = Math.ceil(Math.random()*100);
					arrRand = set2Arr[rand];
					$('#wordAppearance').text(arrRand);
					break;
				case 'Set 3':
					rand = Math.ceil(Math.random()*103);
					arrRand = set3Arr[rand];
					$('#wordAppearance').text(arrRand);
					break;
				case 'Custom':
					var keys = Object.keys( localStorage );
					var len = keys.length;
					rand = Math.ceil(Math.random()*len);
					$('#wordAppearance').html( keys[rand] );
				default:
				return;
			}
	   
			$('#down').removeClass('true false');
			$('input[type="text"]').val('');
		});
  
	// CHECK

	$('#check').click(function() {
	  
		$('#down').removeClass('true false');
			word = $('input[type="text"]').val().toLowerCase();	  
	  
		switch(chosenMode) {
			case 'Elementary':
				compareWords( elem[arrRand] );
				break;
			case 'Intermediate':
				compareWords( inter[arrRand] );
				break;
			case 'Set 1':
				compareWords( set1[arrRand] );
				break;
			case 'Set 2':
				compareWords( set2[arrRand] );
				break;
			case 'Set 3':
				compareWords( set3[arrRand] );
				break;
			case 'Custom':
				x = $('#wordAppearance').html();
				foo = localStorage.getItem(x);
	 
				if(word == foo) {
					$('#down').addClass('true');
					return;
				} else {
					$('#down').addClass('false');
					return;
				}
				break;
			default:
				return;
		}
	   
	});

	// COMPARING

	function compareWords( val ) {
		var ary = val.split(', ');
		
		for(var i=0; i<ary.length; i++) {
			if(word == ary[i]) {
				$('#down').addClass('true');
				return;
			} else {
				continue;
			}
		}
		$('#down').addClass('false');
	}
 
	// GIVE UP

	 $('#giveUp').click(function() {
	   
		switch(chosenMode) {
			case 'Elementary':
				$('#enterWord').val(elem[arrRand]);
				break;
			case 'Intermediate':
				$('#enterWord').val(inter[arrRand]);
				break;
			case 'Set 1':
				$('#enterWord').val(set1[arrRand]);
				break;
			case 'Set 2':
				$('#enterWord').val(set2[arrRand]);
				break;
			case 'Set 3':
				$('#enterWord').val(set3[arrRand]);
				break;
			case 'Custom':
				x = $('#wordAppearance').html();
				foo = localStorage.getItem(x);
				$('#enterWord').val(foo);
				break;
			default:
				return;
		}
	  
	});


	// KEY DOWN

	$('#enterWord').keydown(function(e) {

		switch(parseInt((e.which),10)) {
			case 13:
				$('#down').removeClass('true false');
				word = $('input[type="text"]').val();
				word = word.toLowerCase();
	   
	  
			switch(chosenMode) {
				case 'Elementary':
					compareWords( elem[arrRand] );
					break;
				case 'Intermediate':
					compareWords( inter[arrRand] );
					break;
				case 'Set 1':
					compareWords( set1[arrRand] );
					break;
				case 'Set 2':
					compareWords( set2[arrRand] );
					break;
				case 'Set 3':
					compareWords( set3[arrRand] );
					break;
				case 'Custom':
					x = $('#wordAppearance').html();
					foo = localStorage.getItem(x);
	 
					if(word == foo) {
						$('#down').addClass('true');
						return;
					} else {
						$('#down').addClass('false');
						return;
					}
					break;
				default:
				return;
			}
	  
			break;
			case 17:
	   
			switch(chosenMode) {
				case 'Elementary':
					rand = Math.ceil(Math.random()*50);
					arrRand = elemArr[rand];
					$('#wordAppearance').text(arrRand);
					break;
				case 'Intermediate':
					rand = Math.ceil(Math.random()*50);
					arrRand = interArr[rand];
					$('#wordAppearance').text(arrRand);
					break;
				case 'Set 1':
					rand = Math.ceil(Math.random()*100);
					arrRand = set1Arr[rand];
					$('#wordAppearance').text(arrRand);
					break;
				case 'Set 2':
					rand = Math.ceil(Math.random()*100);
					arrRand = set2Arr[rand];
					$('#wordAppearance').text(arrRand);
					break;
				case 'Set 3':
					rand = Math.ceil(Math.random()*103);
					arrRand = set3Arr[rand];
					$('#wordAppearance').text(arrRand);
					break;
				case 'Custom':
					var keys = Object.keys( localStorage );
					var len = keys.length;
					rand = Math.ceil(Math.random()*len);
					$('#wordAppearance').html( keys[rand] );
				default:
				return;
			}
	   
		   $('#down').removeClass('true false');
		   $('input[type="text"]').val('');
	   
			break;
			default:
			break;
		}
	 
	});

	
	
	
	/* --------------- CUSTOMIZE ----------------- */
	
	

	var btn = $('#saveCustom'),
		customInputNew = document.getElementById('newEngWord'),
		customInputValue = document.getElementById('newRusWord'),
		list = document.getElementById('list');

	// SAVE

	$( btn ).click(function() {
		var eng = $('#newEngWord').val();
		var rus = $('#newRusWord').val();
		
		if( !!eng && !!rus ) {
			youSure.save( eng, rus );
		}
	});
	

	// Save approving

	var youSure = {
		save: function( e, r) {
			$('#save-del').css('display', 'block');
			
			$('#whatAction').html('save');
			$('#modalKey').html( e );
			$('#modalValue').html( r );
			
			this.show();
		},
		del: function( e, r ) {
			$('#save-del').css('display', 'block');
			
			$('#whatAction').html('delete');
			$('#modalKey').html( e );
			$('#modalValue').html( r );
			
			this.show();
		}, 
		show: function() {
			$('#overlay').fadeIn();
			$('#modal-approve').fadeIn();
		},
		deleteAll: function() {
			$('#save-del').css('display', 'none');
			$('#del-all').css('display', 'block');
			
			this.show();
		}
	}

	$(document).on('click', '.modal-btn-approve', function(ev) {
		var target = ev.target;
		var what = $('#whatAction').html();
		
		if( target.id == 'modal-yes' ) {
			
			if ( what == 'save' ) {                                                               // SAVE
				localStorage.setItem( $('#modalKey').html(), $('#modalValue').html() );
				alert('Saved!');
				fade();
			} else if ( what == 'delete' ) {                                                      // DELETE
				localStorage.removeItem( $('#modalKey').html() );
				alert('Deleted!');
				fade();
			} else if ( what == '' ) {
				localStorage.clear();
				alert('Clear!');
				fade();
			}
		
		} else {
			fade();
		}
		
	});
	
	function fade() {
		$('#overlay').fadeOut();
		$('#modal-approve').fadeOut();
		$('#saveCustom').removeClass('act');
		$('#deleteItem').removeClass('act');
		$('#deleteAll').removeClass('act');
		$( customInputNew ).val(''); 
		$( customInputValue ).val('');
	}

	// Show Custom List

	$('#showList').click(function() {
		
		$( list ).fadeToggle();
		
		var currKeys = Object.keys( localStorage );
		
		if( !list.firstElementChild.children.length ) {
			
			for(var i = 0; i<currKeys.length; i++) {
				$('#list ul').append('<li>' + currKeys[i] + '</li>');
			}
			
		}
	
	});
	

	// CRUD Model

	$(document).on('mouseover', '#list ul li', function() {
		
		// EDIT
		if( $('#editItem').hasClass('act') ) {
			this.style.cursor = 'pointer';
			this.style.backgroundColor = 'rgba(236, 151, 31, 0.3)';
			
			$(document).on('click', '#list ul li', function() {
				$( customInputNew ).val( this.innerHTML );
				$( customInputValue ).val( localStorage[this.innerHTML] );
			});
		}
		
		// DELETE
		if( $('#deleteItem').hasClass('act') ) {
			this.style.cursor = 'pointer';
			this.style.backgroundColor = 'rgba(217, 83, 79, 0.3)';
			
			$(document).on('click', '#list ul li', function() {
				youSure.del( this.innerHTML, localStorage[this.innerHTML] );
			});
		}
		
	});

	$(document).on('mouseout', '#list ul li', function() {
		
		if( $('#editItem').hasClass('act') ) {
			this.style.cursor = 'auto';
			this.style.backgroundColor = 'rgb(245, 245, 245)';
		}
		
		if( $('#deleteItem').hasClass('act') ) {
			this.style.cursor = 'auto';
			this.style.backgroundColor = 'rgb(245, 245, 245)';
		}
		
	});


	$('.custom-controllers').click(function(ev) {
		this.classList.toggle('act');
		
		if( ev.target.id == 'editItem' && !( ev.target.classList.contains('act') ) ) {
			$( customInputNew ).val(''); 
		}
		
	});
	
	// DELETE ALL
	
	$('#deleteAll').click(function() {
		youSure.deleteAll();
	});
	
	

	});
});