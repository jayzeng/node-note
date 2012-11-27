import os

srcFile = os.path.join( os.getcwd(), "README.md" );

if not (os.path.exists( srcFile ) ):
    print "Failed to read README.md"
else:
    print open( srcFile, 'r' ).read()
