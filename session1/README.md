The asynchronous nature of Node.js makes it difficult to understand.

To read README.md within current directory:

```php
$srcFile = file_get_contents( __DIR__ . DIRECTORY_SEPARATOR. 'README.md' );
if( false === $srcFile ) {
    throw new \RuntimeException( 'Failed to read README.md' );
}

echo $srcFile;
```

```python
import os

srcFile = os.path.join( os.getcwd(), "README.md" );

if not (os.path.exists( srcFile ) ):
    print "Failed to read README.md"
else:
    print open( srcFile, 'r' ).read()
```

```javascript
var fs = require('fs');

fs.readFile( __dirname + '/README.md', 'utf-8', function(err, data) {
    if( err ) {
        throw err;
    }
    console.log( data );
});
```

Interacting with filesystem is a non-blocking asynchronous operation in Node.js, code after readFile will be executed immediately.
