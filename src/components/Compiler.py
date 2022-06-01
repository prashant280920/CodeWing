import sys
import requests




url = "https://ide.geeksforgeeks.org/main.php"

# code = """

# print("Hello World")
# x = input()
# print(x,":)")
# """

code = sys.argv[1]
inputs = ""

data={"lang": "Python3",
"code": code,
"input": inputs,
"save": True}

r=requests.post(url,data=data)

resp=r.json()

stop=False

if("status" in resp):
    sid=resp["sid"]
    while(not stop):
        url2="https://ide.geeksforgeeks.org/submissionResult.php"
        data2={"sid":sid,"requestType":"fetchResults"}
        
        r=requests.post(url2,data=data2)
        resp=r.json()
        
        status=resp["status"]
        if(status.lower()=="success"):
            break

print(resp['output'])