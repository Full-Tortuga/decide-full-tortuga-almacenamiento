import os
import time

dir = './decide/backups/backups/'

def location():
  return dir + time.strftime("%d-%m-%Y-%H:%M:%S")

def run_backup():
    run_backup = "mongodump --out " + location()
    os.system(run_backup)

print("generating mongo backup...")

run_backup()

 