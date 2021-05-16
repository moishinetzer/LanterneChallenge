import csv
import json

# Array of the final edited data with the first item being the headers
filtered_csv = [["FID", "OBJECTID", "NAME", "EASTING", "NORTHING", "LINES", "NETWORK", "Zone", "x", "y"]]

# Array of the allowed lines to check with all the lines
allowed_lines = ["Central", "Northern", "Piccadilly", "Hammersmith & City", "District", "Circle", "Metropolitan",
                 "Jubilee", "Waterloo & City", "Victoria", "Bakerloo"]

# Process and filter the csv file
with open('data.csv') as data:
    csv_reader = csv.reader(data, delimiter=',')

    # Separate the headers, don't need to save them just for readability
    # Could also have saved here as first element but I think it may clearer there
    headers = next(csv_reader)
    for row in csv_reader:
        edited_row = []
        corrected_lines = []

        # For each line in the lines field, check if it is allowed
        for line in row[5].split(", "):
            if line in allowed_lines:
                corrected_lines.append(line)

        # As long as this row is for the underground we can use this row
        if row[6] == "London Underground":
            edited_row.append(int(row[0]))
            edited_row.append(int(row[1]))
            edited_row.append(row[2])
            edited_row.append(int(row[3]))
            edited_row.append(int(row[4]))
            edited_row.append(corrected_lines)
            edited_row.append(row[6])
            edited_row.append(int(row[7]))
            edited_row.append(float(row[8]))
            edited_row.append(float(row[9]))

            # Now append that to the final array of data
            filtered_csv.append(edited_row)

# View the edited results
print(filtered_csv)

# Save results in csv file to use for API / website
writer = csv.writer(open("editedData.csv", 'w', newline=''))
for row in filtered_csv:
    writer.writerow(row)
    print(row)

# Save results as a JSON file to use for now
print(headers)
final_list = [{"FID": x[0], "OBJECTID": x[1], "NAME": x[2], "EASTING": x[3], "NORTHING": x[4], "LINES": x[5],
               "NETWORK": x[6], "Zone": x[7], "x": x[8], "y": x[9]} for x in filtered_csv[1:]]

with open('data.json', 'w') as json_file:
    json.dump(final_list, json_file)
