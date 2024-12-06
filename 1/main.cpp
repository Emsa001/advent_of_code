#include <iostream>
#include <fstream>
#include <string>
#include <vector>

int main()
{

    std::ifstream data("input.txt");
    std::string line;

    std::vector<int> a;
    std::vector<int> b;

    while (std::getline(data, line))
    {
        int pos = line.find("   ");
        while (pos != std::string::npos)
        {
            std::string first = line.substr(0, pos);
            std::string second = line.substr(pos + 3, line.length());

            a.push_back(std::stoi(first));
            b.push_back(std::stoi(second));

            line.erase(0, pos + 3);
            pos = line.find("   ");
        }
    }

    std::sort(a.begin(), a.end());
    std::sort(b.begin(), b.end());

    int val = 0;
    for (int i = 0; i < a.size(); i++)
        val += abs(a[i] - b[i]);

    std::cout << val << std::endl;
    data.close();
}