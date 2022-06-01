class MultipleSum:
    def totalmul(self,a):
        n=1,total=0
        while a*n<=1000:
            total=total+a*n
            n=n+1
        return total

