This Node.js project is a utility designed to generate fake data using the Invertexto API and save the results into uniquely named text files. The program prompts the user to specify the number of data entries they wish to generate. It then makes multiple API requests to fetch the required data fields (e.g., name, CPF, birth date, email, phone number) in the specified locale (pt_BR). The results are saved in uniquely named text files to avoid overwriting existing files.

Key Features
Prompts the user for the number of data entries to generate.
Fetches data from the Invertexto API based on user-specified parameters.
Saves the generated data in uniquely named text files.
Handles multiple requests and ensures file names do not clash.
Installation and Usage
Clone the Repository


git clone https://github.com/brvapp/API-de-gerar-dados.git
cd your-repository-folder
Install Dependencies

Use npm to install the required packages:

Execute the script using Node.js:


Follow the Prompts

The program will prompt you to enter the number of data entries you wish to generate. Enter the desired quantity and press Enter.

The generated data will be saved in a uniquely named text file in the current directory. Each time you run the program, it ensures that the new file name does not conflict with existing ones.
