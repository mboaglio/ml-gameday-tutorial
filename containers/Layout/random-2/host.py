#! /usr/bin/env python3
import json
import random
import traceback
import math
def model_fn(model_dir):
    return {}


def transform_fn(model, request_body, content_type, accept_type):
    try:
        print(request_body)
        input_object=json.loads(request_body)

        height=input_object["height"]
        width=input_object["width"]
        ships=input_object["ruleSet"]["shipCells"]

        size=2
        num_ships=math.ceil(ships/2)
        extra=ships-size*num_ships

        while True: #iterate till we generate a valid layout
            layout=[[0]*width for x in range(height)]

            #generate ships of size 2
            cords=[(random.randint(0,width-size),random.randint(0,width-size)) 
                for z in range(num_ships)]
            
            for (x,y) in cords:
                layout[x][y]=1
                layout[x][y+1]=1

            #gerenate ships of size 1 incase ships is not a multiple of 2
            cords=[(random.randint(0,width-1),random.randint(0,width-1)) 
                for z in range(extra)]
            
            for (x,y) in cords:
                layout[x][y]=1
            
            if sum([sum(x) for x in layout])==ships: #test for valid layout
                break

        return bytearray(json.dumps({
            "layout":layout,
            "session":{
                "type":"random2-vertical"
            }
        }),'utf-8'),accept_type
    except Exception as e:
        print(traceback.format_exc())
        print(e)
