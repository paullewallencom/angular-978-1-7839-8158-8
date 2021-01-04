describe('Creating bbOneBindHtml and bbOneBindStyle directive', function () {
      
      it('should set the correct html to the element and destroy the watchers', function() {
        scope.testValue = '<p>No Bindings</p>';
        var oneBindHtmlNode = $compile('<div bb-one-bind-html="testValue"></div>')(scope);
        scope.$apply();
        expect(oneBindHtmlNode.html()).toBe('<p>No Bindings</p>'); 
        expect(scope.$$watchers.length).toBe(0);  
      });

      it('should set the correct style to the element and destroy the watchers', function() {
        scope.testValue = {width: '100px', height: '200px'};
        var oneBindStyleNode = $compile('<div bb-one-bind-style="testValue"></div>')(scope);
        scope.$apply();
        expect(oneBindStyleNode.css('height')).toBe('200px'); 
        expect(oneBindStyleNode.css('width')).toBe('100px'); 
        expect(scope.$$watchers.length).toBe(0);  
      });

});
