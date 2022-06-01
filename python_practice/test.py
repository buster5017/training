f =open("foo.txt","w")
try:
    data =f.read()
    print(data)
except Exception as e:
    print(e)
finally:
    f.close()