describe('Creating The bbOneBind* directive', function () {
    
    angular.forEach(['text','src','href','id','class','alt','value','title'], function(v){
       var oneBindNode;
      //Should create bbOneBind*
      beforeEach(function(){
          scope.testValue = 'tester+tester+tester' + v;
          oneBindNode = $compile('<div bb-one-bind-' + v + '="testValue"></div>')(scope);
          scope.$apply();
          expect(oneBindNode).not.toBe(undefined);
      }); 
      
      it('should have the correct text for the oneTime directive', function() {
        if(v === 'text'){
          expect(oneBindNode[v]()).toBe('tester+tester+tester' + v);
        } else if(v === 'class'){
          expect(oneBindNode.hasClass('tester+tester+tester')).toBe(true);
        } else {
          expect(oneBindNode.attr(v)).toBe('tester+tester+tester');
        }
      });

      it('should not have any watchers on the scope', function() {
        expect(scope.$$watchers.length).toBe(0);
      });
    });

});
