import requests
import time
import json
import re
from pprint import pprint

def digikala_data(url='https://api.digikala.com/v1/search/', page="1"):

    res1 = requests.get(url + '?page=' + page)
    res1 = res1.json()
    return res1


def getDigiKalaAllProduct():
    products = []
    
    for page in range(1, 10):
        response = digikala_data(
            'https://api.digikala.com/v1/search/', str(page))
        products_page = response['data']['products']
        for i in products_page:
            products.append(i)
        print(page)
        

    f = open("digi10.json", "a") 
    f.write(json.dumps({
        "data":products
    }))
    f.close()
    return products


#getDigiKalaAllProduct()



with open('./digi10.json') as f:
  file_contents = f.read()

products = json.loads(file_contents)





print(products['data'][0]['data_layer']['item_category2'])

approved_product = []
for product in products['data']:
    item_category2 = product['data_layer']['item_category2']
    item_category3 = product['data_layer']['item_category3']
    item_category4 = product['data_layer']['item_category4']
    item_category5 = product['data_layer']['item_category5']
    check2 = re.search("^.*بهداشت.*$" , item_category2)
    check3 = re.search("^.*بهداشت.*$" , item_category3)
    check4 = re.search("^.*بهداشت.*$" , item_category4)
    check5 = re.search("^.*بهداشت.*$" , item_category5)
    
    
    if check2 or check3 or check4 or check5:
        approved_product.append(product)
        
        
        
pprint(approved_product)

        
        