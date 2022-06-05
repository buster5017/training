class MultipleSum:
    def __init__(self):
        self.total=0
    def totalmul(self,a):
        n=1
        while a*n<=1000:
            self.total=self.total+a*n
            n=n+1
        return self.total

cal3=MultipleSum()
cal5=MultipleSum()
print(cal3.totalmul(3)+cal5.totalmul(5)-cal3.totalmul(15))
