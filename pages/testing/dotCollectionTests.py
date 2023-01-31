




import requests
CANVAS_BACKEND="http://localhost:2000"
BASE_BACKEND = "http://localhost:8000"


def calculateAvgDotPython(userid):
    response=requests.post(BASE_BACKEND+"/getUserById",json={"userid":userid})
    dic=response.json()


    final=[]

    def cleanDot(dot):
        for row in dot:
            
            column_array_values=[]
            for column in row :
                if column:
                    column_array_values.append(int(column['value'])) #since the value is a string in the database, we convert it to an int
                    # print(column)
                else:
                    column_array_values.append(0)
            # print(column_array_values)
            final.append(column_array_values)
        # print(final)
        return final




    # NEED TO CREATE ATTRIBUTE LIST NEXT
    attributes=set() #set


    dotCollect=[]
    for roomid in dic["dotCollection"]:
        attribute_id=dic["dotCollection"][roomid]["attribute_id"]
        attributes.add(attribute_id) #add attribute_id to the set(unique attribute ids only added )
        dot=cleanDot(dic["dotCollection"][roomid]["dot"])
        ent={"attribute_id":attribute_id,"room_id":roomid,"dot":dot} 
        dotCollect.append(ent)

    print(dotCollect)

        



    dotCollection = [
    {
        "attribute_id":1,
        "room_id":1,
        "dot":[[9,6,7,3] ,[4,3,6,2],[1,1,1,5]]

    },{
        "attribute_id":2,
        "room_id":2,
        "dot":[[9,6,7,4] ,[4,3,6,8],[1,1,1,5]]


    },{

        "attribute_id":1,
        "room_id":3,
        "dot":[[9,6,7,3] ,[4,3,6,2],[1,1,1,5]]

    },


    ]

    dotCollection=dotCollect


    # attri: 1 

    # 9 6 7 3
    # 4 3 6 2
    # 1 1 1 5

    # 9 6 7 3
    # 4 3 6 2
    # 1 1 1 5


    #  TEST 1 : Add all similar attribute id content












    averages=[]
    # dotCollection?.map(async(dot)=>{

    #     # //set is now populated with all unique attribute ids
    #     await attributes.insert(dot?.attribute_id)  # attributes={1,2}

    # })


    for i in attributes :
        buffer=[] #create a new buffer for each attribute
        main_buffer=[]
        peers=0
        skills=0
        for entities in dotCollection:
            #i is the attribute id which is constantly moving/changing, aggregating similar attribute_id dots
            if(entities["attribute_id"]==i):
                for dot_array in entities["dot"] :
                    #this is wrong, change peers.although we never use it
                    peers= len(dot_array)
                    # skills= len(api_call(attribute_id).names)
                    skills=len(dot_array) #column for now is 3 ( 3 skills)
                    buffer.append(dot_array)
            else : 
                continue
        

        # //do buffer calculations here. below is first buffer
        #print(buffer)
        for individual in buffer:
            for value in individual:
                main_buffer.append(value)
        
        # print(peers)
        # print(main_buffer)

        sum_of_skill=0
        #hops = peers * number of attribute ids. its how many times the pointer hops around the main_buffer
        hops=0 
        res=[]


        for j in range(0,4):
            # reset sum of specefic skill after use/when moving to next skill 
            sum_of_skill=0
            hops=0 #reset hop count(hops) everytime new skill is moved on/being calculated

            for k in range(j,len(main_buffer),skills): #0-17
                # print(j)
                hops=hops+1
                sum_of_skill=main_buffer[k]+sum_of_skill
            # print(hops)
            res.append(sum_of_skill/hops) 
            


        # Constructed a final array that contains the attribute id and its averages.
        resDoc={"attribute_id":i, "dot" :res}
        averages.append(resDoc)
        


    # // TEST 2 : Display the content of all attribute ids

    # // TEST 3 : Make sure similar attribute id's dots have the same number of elements in the array.
                # Check for null condition, if null then add 0
    
    # avg=[
    #     {"attribute_id":1,"dot":[1,2,3,4]},
    #     {"attribute_id":2,"dot":[2,3,5,1]},
    #     {"attribute_id":3,"dot":[2,2,3,4]}
    #     ]



    # TEST 5 : Create an architecture that defines how and when to add to the already existing averages array . Do we execute this script everytime a change is made? Starting from already existing dots.
    #  Or do we use a dynamic programming approach and only calculate the ones that are new, and forget the old ones? Its more effeicient. 

    print(averages)

    requests.put(CANVAS_BACKEND+"/updateRatings",json={"rating_array":averages  , "userid":userid})
    



