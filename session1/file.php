<?php
$srcFile = file_get_contents( __DIR__ . DIRECTORY_SEPARATOR. 'README.md' );

if( false === $srcFile ) {
        throw new \RuntimeException( 'Failed to read README.md' );
}
echo $srcFile;
?>
