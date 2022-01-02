import os
import time

def location(dir):
  return dir + time.strftime("%d-%m-%Y-%H:%M:%S")

def run_backup(dir):
    print("generating mongo backup...")
    run_backup = "mongodump --out " + location(dir)
    os.system(run_backup)




 