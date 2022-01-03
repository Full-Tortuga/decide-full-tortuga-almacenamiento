import os
import time
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED as ST_201,
    HTTP_400_BAD_REQUEST as ST_400,
)

def location(dir):
  return dir + str(time.strftime("%d-%m-%Y-%H:%M:%S"))

class CreateBackup(generics.CreateAPIView):
  def post(self, request, *args, **kwargs):
    try:
      print("generating mongo backup...")
      run_backup = "mongodump --out " + location("./backups/backups/")
      os.system(run_backup)
      return Response({"name": location("./backups/backups/")}, status=ST_201)
    except Exception as e:
      return Response({"error": str(e)}, status=ST_400)
    
class RestoreBackup(generics.ListCreateAPIView):
    def get(self, request, *args, **kwargs):
      try:
        content = os.listdir("./backups/backups/")
        return Response({"availables backups": content}, status=HTTP_200_OK)

      except Exception as e:
        return Response({"error": str(e)}, status=ST_400)
      
    def post(self, request, backup_name, *args, **kwargs):
      try:
        print("Restoring mongo backup....")
        restore_backup = "mongorestore --drop -d decide ./backups/backups/" + backup_name +"/decide"
        os.system(restore_backup)
        return Response({"Successfully backup restored "}, status=HTTP_200_OK)
      except Exception as e:
        return Response({"error": str(e)}, status=ST_400)

    




 