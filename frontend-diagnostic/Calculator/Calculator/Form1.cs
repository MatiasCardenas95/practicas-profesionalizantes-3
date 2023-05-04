using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Calculator
{
    public partial class Form1 : Form
    {
        double Number1 = 0;
        double Number2 = 0;
        char Operator;

        public Form1()
        {
            InitializeComponent();
        }

        private void addNumber(object sender, EventArgs e)
        {
            var button = ((Button)sender);

            if (textResult.Text == "0")
            {
                textResult.Text = "";
            }

            textResult.Text += button.Text;
        }

        private void clickOperator(object sender, EventArgs e)
        {
            var button = ((Button)sender);

            Number1 = Convert.ToDouble(textResult.Text);
            Operator = Convert.ToChar(button.Tag);

            textResult.Text = "0";
        }

        private void buttonEqual_Click(object sender, EventArgs e)
        {
            Number2 = Convert.ToDouble(textResult.Text);

            if (Operator == '+')
            {
                textResult.Text = (Number1 + Number2).ToString();
                Number1 = Convert.ToDouble(textResult.Text);
            }

            else if (Operator == '-')
            {
                textResult.Text = (Number1 - Number2).ToString();
                Number1 = Convert.ToDouble(textResult.Text);
            }

            else if (Operator == 'X')
            {
                textResult.Text = (Number1 * Number2).ToString();
                Number1 = Convert.ToDouble(textResult.Text);
            }

            else if (Operator == '∕')
            {
                if (textResult.Text != "0")
                {
                    textResult.Text = (Number1 / Number2).ToString();
                    Number1 = Convert.ToDouble(textResult.Text);
                }

                else
                {
                    MessageBox.Show("Error");
                }
                
            }

        }

        private void buttonDelete_Click(object sender, EventArgs e)
        {
            Number1 = 0;
            Number2 = 0;
            Operator = '\0';
            textResult.Text = "0";
        }

        private void buttonPoint_Click(object sender, EventArgs e)
        {
            if (!textResult.Text.Contains(","))
            {
                textResult.Text += ",";
            }
        }
    }
}
