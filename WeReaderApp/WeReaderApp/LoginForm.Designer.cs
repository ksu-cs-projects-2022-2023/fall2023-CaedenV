namespace WeReaderApp
{
    partial class uxLoginForm
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(uxLoginForm));
            this.uxWelcLabel = new System.Windows.Forms.Label();
            this.uxWRLabel = new System.Windows.Forms.Label();
            this.uxLoginlbl = new System.Windows.Forms.Label();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.textBox2 = new System.Windows.Forms.TextBox();
            this.uxSignUpButton = new System.Windows.Forms.Button();
            this.uxLoginButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // uxWelcLabel
            // 
            this.uxWelcLabel.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.uxWelcLabel.AutoSize = true;
            this.uxWelcLabel.Font = new System.Drawing.Font("Cambria", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.uxWelcLabel.ForeColor = System.Drawing.Color.MediumPurple;
            this.uxWelcLabel.Location = new System.Drawing.Point(116, 8);
            this.uxWelcLabel.Name = "uxWelcLabel";
            this.uxWelcLabel.Size = new System.Drawing.Size(140, 28);
            this.uxWelcLabel.TabIndex = 0;
            this.uxWelcLabel.Text = "Welcome to";
            this.uxWelcLabel.TextAlign = System.Drawing.ContentAlignment.TopCenter;
            // 
            // uxWRLabel
            // 
            this.uxWRLabel.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.uxWRLabel.AutoSize = true;
            this.uxWRLabel.Font = new System.Drawing.Font("Cambria", 36F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.uxWRLabel.ForeColor = System.Drawing.Color.MediumPurple;
            this.uxWRLabel.Location = new System.Drawing.Point(62, 35);
            this.uxWRLabel.Name = "uxWRLabel";
            this.uxWRLabel.Size = new System.Drawing.Size(251, 57);
            this.uxWRLabel.TabIndex = 1;
            this.uxWRLabel.Text = "WeReader";
            // 
            // uxLoginlbl
            // 
            this.uxLoginlbl.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.uxLoginlbl.AutoSize = true;
            this.uxLoginlbl.Location = new System.Drawing.Point(101, 92);
            this.uxLoginlbl.Name = "uxLoginlbl";
            this.uxLoginlbl.Size = new System.Drawing.Size(165, 14);
            this.uxLoginlbl.TabIndex = 2;
            this.uxLoginlbl.Text = "Please enter your information:";
            // 
            // textBox1
            // 
            this.textBox1.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.textBox1.ForeColor = System.Drawing.Color.MediumPurple;
            this.textBox1.Location = new System.Drawing.Point(72, 155);
            this.textBox1.Name = "textBox1";
            this.textBox1.PlaceholderText = "Password";
            this.textBox1.Size = new System.Drawing.Size(221, 22);
            this.textBox1.TabIndex = 3;
            this.textBox1.WordWrap = false;
            // 
            // textBox2
            // 
            this.textBox2.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.textBox2.ForeColor = System.Drawing.Color.MediumPurple;
            this.textBox2.Location = new System.Drawing.Point(72, 127);
            this.textBox2.Name = "textBox2";
            this.textBox2.PlaceholderText = "valid@email.com";
            this.textBox2.Size = new System.Drawing.Size(221, 22);
            this.textBox2.TabIndex = 4;
            this.textBox2.WordWrap = false;
            // 
            // uxSignUpButton
            // 
            this.uxSignUpButton.Location = new System.Drawing.Point(218, 183);
            this.uxSignUpButton.Name = "uxSignUpButton";
            this.uxSignUpButton.Size = new System.Drawing.Size(75, 23);
            this.uxSignUpButton.TabIndex = 5;
            this.uxSignUpButton.Text = "Sign Up!";
            this.uxSignUpButton.UseVisualStyleBackColor = true;
            // 
            // uxLoginButton
            // 
            this.uxLoginButton.Location = new System.Drawing.Point(72, 183);
            this.uxLoginButton.Name = "uxLoginButton";
            this.uxLoginButton.Size = new System.Drawing.Size(75, 23);
            this.uxLoginButton.TabIndex = 6;
            this.uxLoginButton.Text = "Log in";
            this.uxLoginButton.UseVisualStyleBackColor = true;
            // 
            // uxLoginForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 14F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Ivory;
            this.ClientSize = new System.Drawing.Size(379, 273);
            this.Controls.Add(this.uxLoginButton);
            this.Controls.Add(this.uxSignUpButton);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.uxLoginlbl);
            this.Controls.Add(this.uxWRLabel);
            this.Controls.Add(this.uxWelcLabel);
            this.Font = new System.Drawing.Font("Cambria", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.ForeColor = System.Drawing.Color.MediumPurple;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "uxLoginForm";
            this.Text = "Login";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Label uxWelcLabel;
        private Label uxWRLabel;
        private Label uxLoginlbl;
        private TextBox textBox1;
        private TextBox textBox2;
        private Button uxSignUpButton;
        private Button uxLoginButton;
    }
}