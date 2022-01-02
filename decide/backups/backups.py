import os
import time
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import (
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
    




 